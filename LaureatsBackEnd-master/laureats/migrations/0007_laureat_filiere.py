# Generated by Django 3.0.2 on 2020-01-10 20:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('laureats', '0006_filiere'),
    ]

    operations = [
        migrations.AddField(
            model_name='laureat',
            name='filiere',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='laureats', to='laureats.Filiere'),
            preserve_default=False,
        ),
    ]