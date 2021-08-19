from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

# Create your models here.


class Realtor(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    full_name = models.CharField(max_length=255, editable=False)
    slug = models.SlugField(editable=False)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d')
    description = models.TextField(blank=True)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    top_seller = models.BooleanField(default=False)
    date_hired = models.DateTimeField(default=datetime.now, blank=True)

    class Meta:
        ordering = ("date_hired", )
        verbose_name_plural = "Realtors"

    def save(self, *args, **kwargs):
        if not self.full_name:
            self.full_name = (self.first_name).capitalize() + " " + \
                (self.last_name).capitalize()
        if not self.slug:
            self.slug = slugify(self.full_name)
        return super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.full_name} - {self.phone}"
