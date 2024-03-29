"""empty message

Revision ID: d8e9d8bd31af
Revises: 52849fde2ffd
Create Date: 2024-03-23 21:46:19.329046

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd8e9d8bd31af'
down_revision = '52849fde2ffd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('blog_comment',
    sa.Column('blog_id', sa.Integer(), nullable=True),
    sa.Column('comment_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['blog_id'], ['blogs.id'], ),
    sa.ForeignKeyConstraint(['comment_id'], ['comments.id'], )
    )
    op.drop_table('blog_comments')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('blog_comments',
    sa.Column('blog_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('comment_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['blog_id'], ['blogs.id'], name='blog_comments_blog_id_fkey'),
    sa.ForeignKeyConstraint(['comment_id'], ['comments.id'], name='blog_comments_comment_id_fkey')
    )
    op.drop_table('blog_comment')
    # ### end Alembic commands ###
