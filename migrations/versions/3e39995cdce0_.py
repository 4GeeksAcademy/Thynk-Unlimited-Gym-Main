"""empty message

Revision ID: 3e39995cdce0
Revises: 09eeb2fa79f7
Create Date: 2024-03-25 23:39:07.380361

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3e39995cdce0'
down_revision = '09eeb2fa79f7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('blog_comments',
    sa.Column('blog_id', sa.Integer(), nullable=True),
    sa.Column('comment_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['blog_id'], ['blogs.id'], ),
    sa.ForeignKeyConstraint(['comment_id'], ['comments.id'], )
    )
    op.drop_table('blog_comment')
    with op.batch_alter_table('blogs', schema=None) as batch_op:
        batch_op.drop_column('user_name')

    with op.batch_alter_table('comments', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=False))
        batch_op.create_foreign_key(None, 'user', ['user_id'], ['id'])

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=80), nullable=True))
        batch_op.create_unique_constraint(None, ['name'])
        batch_op.drop_column('user_name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_name', sa.VARCHAR(), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('name')

    with op.batch_alter_table('comments', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('user_id')

    with op.batch_alter_table('blogs', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_name', sa.VARCHAR(), autoincrement=False, nullable=False))

    op.create_table('blog_comment',
    sa.Column('blog_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('comment_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['blog_id'], ['blogs.id'], name='blog_comment_blog_id_fkey'),
    sa.ForeignKeyConstraint(['comment_id'], ['comments.id'], name='blog_comment_comment_id_fkey')
    )
    op.drop_table('blog_comments')
    # ### end Alembic commands ###