"""empty message

Revision ID: 09eeb2fa79f7
Revises: d8e9d8bd31af
Create Date: 2024-03-23 21:51:34.423428

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '09eeb2fa79f7'
down_revision = 'd8e9d8bd31af'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_name', sa.String(), nullable=False))
        batch_op.drop_constraint('user_name_key', type_='unique')
        batch_op.drop_column('name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.VARCHAR(length=80), autoincrement=False, nullable=True))
        batch_op.create_unique_constraint('user_name_key', ['name'])
        batch_op.drop_column('user_name')

    # ### end Alembic commands ###
