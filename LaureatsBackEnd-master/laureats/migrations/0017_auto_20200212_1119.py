# Generated by Django 3.0.2 on 2020-02-12 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('laureats', '0016_auto_20200212_1038'),
    ]

    operations = [
        migrations.AlterField(
            model_name='laureat',
            name='sexe',
            field=models.CharField(choices=[(1, 'Masculin'), (2, 'Feminin'), (3, 'Autre')], default='', max_length=50),
        ),
    ]
