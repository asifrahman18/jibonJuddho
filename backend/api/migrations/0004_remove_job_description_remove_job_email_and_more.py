# Generated by Django 5.0.1 on 2024-01-17 08:56

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_job_company_delete_company'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='job',
            name='description',
        ),
        migrations.RemoveField(
            model_name='job',
            name='email',
        ),
        migrations.AlterField(
            model_name='job',
            name='company',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='job',
            name='openings',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='job',
            name='salary',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='job',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
