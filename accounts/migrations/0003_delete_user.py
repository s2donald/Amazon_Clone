# Generated by Django 3.2.4 on 2021-06-26 03:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_rename_accounts_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]
