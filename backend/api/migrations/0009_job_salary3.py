# Generated by Django 5.0.1 on 2024-02-13 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_job_phone_alter_job_jobtype'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='salary3',
            field=models.IntegerField(default=0, null=True),
        ),
    ]