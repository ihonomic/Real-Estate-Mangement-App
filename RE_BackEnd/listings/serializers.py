from django.db.models import fields
from rest_framework import serializers
from .models import Listing
from realtors.serializers import RealtorSerializer


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ("title", "address", "city", "state", "price", "sale_type",
                  "home_type", "bedrooms", "bathrooms", "sqft", "photo_main", "slug")


class ListingdetailSerializer(serializers.ModelSerializer):
    realtor = RealtorSerializer(read_only=True)

    class Meta:
        model = Listing
        fields = "__all__"
        lookup_field = "slug"
