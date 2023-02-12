from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Movie(models.Model):

    parentUser = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    name = models.TextField()
    description = models.TextField()
    release_date = models.DateField()

    class Meta:
        db_table = 'movie'

