# Generated by Django 3.0.2 on 2020-01-09 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('laureats', '0002_auto_20200109_1912'),
    ]

    operations = [
        migrations.CreateModel(
            name='Promotion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('annee_scolaire', models.IntegerField()),
            ],
            options={
                'ordering': ['annee_scolaire'],
            },
        ),
        migrations.RenameField(
            model_name='laureat',
            old_name='situation_familial',
            new_name='situation_familiale',
        ),
        migrations.AlterField(
            model_name='laureat',
            name='date_inscription',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='laureat',
            name='date_naissance',
            field=models.DateField(),
        ),
    ]
