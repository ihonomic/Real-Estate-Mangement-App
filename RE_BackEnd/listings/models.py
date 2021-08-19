from django.db import models
from django.db.models.enums import Choices
from django.utils import timezone
from django.template.defaultfilters import slugify
from realtors.models import Realtor

# Create your models here.


class Listing(models.Model):
    class SaleType(models.TextChoices):
        FOR_SALE = 'For Sale'
        FOR_RENT = 'For Rent'

    class HomeType(models.TextChoices):
        SELF_CONTAIN = 'Self Contain'
        DUPLEX = 'Duplex'
        MANSION = 'Mansion'
        BUNGALOW = 'Bungalow'
        FAMILY = 'Family'

    realtor = models.ForeignKey(Realtor, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=150)
    description = models.TextField(null=True, blank=True)
    slug = models.SlugField(unique=True)
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=150)
    state = models.CharField(max_length=150)
    zipcode = models.CharField(max_length=12)
    country = models.CharField(max_length=150, default="Nigeria")
    sale_type = models.CharField(
        max_length=150, choices=SaleType.choices, default=SaleType.FOR_SALE)
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    home_type = models.CharField(
        max_length=20, choices=HomeType.choices, default=HomeType.SELF_CONTAIN)
    sqft = models.IntegerField()
    open_house = models.BooleanField(default=False)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d')
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_3 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_4 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_5 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_6 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=timezone.now, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = 'Listings'
        ordering = ("list_date", )

    def __str__(self):
        return f"{self.title} - {self.address}"
