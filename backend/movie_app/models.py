from django.db import models

# Create your models here.

class Movie(models.Model):

    name = models.TextField()
    description = models.TextField()
    release_date = models.DateField()

    class Meta:
        db_table = 'movie'

