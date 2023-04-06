from django.core.files.storage import FileSystemStorage
from django.db import models

class Model(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='model/images')
    file = models.FileField(upload_to='model/files')
    format = models.CharField(max_length=10)
    price = models.DecimalField(decimal_places=2, max_digits=20)
    slug = models.SlugField(default='dummy-slug', verbose_name='Slug')

    def __str__(self):
        return self.name
