# Generated by Django 3.0.2 on 2020-01-11 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('laureats', '0012_auto_20200111_1534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='etudiant',
            name='new_date_inscription',
            field=models.DateField(blank=True, null=True),
        ),
    ]
