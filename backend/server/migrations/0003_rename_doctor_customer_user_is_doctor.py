# Generated by Django 5.1 on 2025-04-21 19:09

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("server", "0002_create_admin"),
    ]

    operations = [
        migrations.RenameField(
            model_name="user",
            old_name="doctor_customer",
            new_name="is_doctor",
        ),
    ]
