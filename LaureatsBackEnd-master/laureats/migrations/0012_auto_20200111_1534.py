# Generated by Django 3.0.2 on 2020-01-11 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('laureats', '0011_auto_20200111_1525'),
    ]

    operations = [
        migrations.AlterField(
            model_name='etudiant',
            name='new_date_inscription',
            field=models.DateField(blank=True),
        ),
    ]
