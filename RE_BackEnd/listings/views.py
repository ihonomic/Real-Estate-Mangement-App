from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework import generics
from .models import Listing
from .serializers import ListingSerializer, ListingdetailSerializer
from datetime import datetime, timedelta, timezone


class ListingsView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    queryset = Listing.objects.order_by(
        '-list_date').filter(is_published=True)
    # lookup_field = 'slug'


class ListingView(generics.RetrieveDestroyAPIView):
    serializer_class = ListingdetailSerializer
    queryset = Listing.objects.select_related("realtor",).order_by(
        '-list_date').filter(is_published=True)
    lookup_field = 'slug'


class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer

    def post(self, request, format=None):
        queryset = Listing.objects.order_by(
            '-list_date').filter(is_published=True)
        data = self.request.data
#   sale_type
        sale_type = data["sale_type"]
        queryset = queryset.filter(sale_type__iexact=sale_type)
#   price
        price = data["price"]
        if price == "0+":
            price = 0
        elif price == "N800,000+":
            price = 800000
        elif price == "N1,000,000+":
            price = 1000000
        elif price == "N1,200,000+":
            price = 1200000
        elif price == "N1,400,000+":
            price = 1400000
        elif price == "N1,600,000+":
            price = 1600000
        elif price == "N1,800,000+":
            price = 1800000
        elif price == "N2,000,000+":
            price = 2000000
        elif price == "N2,200,000+":
            price = 2200000
        elif price == "Any":
            price = -1

        if price != -1:
            queryset = queryset.filter(price__gte=price)
#   bedrooms
        bedrooms = data["bedrooms"]
        if bedrooms == '0+':
            bedrooms = 0
        elif bedrooms == '1+':
            bedrooms = 1
        elif bedrooms == '2+':
            bedrooms = 2
        elif bedrooms == '3+':
            bedrooms = 3
        elif bedrooms == '4+':
            bedrooms = 4
        elif bedrooms == '5+':
            bedrooms = 5
        queryset = queryset.filter(bedrooms__gte=bedrooms)
#   hometype
        home_type = data['home_type']
        queryset = queryset.filter(home_type__iexact=home_type)
#   bathrooms
        bathrooms = data["bathrooms"]
        if bathrooms == '0+':
            bathrooms = 0
        elif bathrooms == '1+':
            bathrooms = 1
        elif bathrooms == '2+':
            bathrooms = 2
        elif bathrooms == '3+':
            bathrooms = 3
        elif bathrooms == '4+':
            bathrooms = 4
        elif bathrooms == '5+':
            bathrooms = 5
        queryset = queryset.filter(bathrooms__gte=bathrooms)
#    sqft
        sqft = data['sqft']
        if sqft == '1000+':
            sqft = 1000
        elif sqft == '1200+':
            sqft = 1200
        elif sqft == '1500+':
            sqft = 1500
        elif sqft == '2000+':
            sqft = 2000
        elif sqft == '2200+':
            sqft = 2200
        elif sqft == '2500+':
            sqft = 2500
        if sqft != 0:
            queryset = queryset.filter(sqft__gte=sqft)
#   days listed
        days_listed = data['days_listed']
        if days_listed == '1 or less':
            days_listed = 1
        elif days_listed == '2 or less':
            days_listed = 2
        elif days_listed == '5 or less':
            days_listed = 5
        elif days_listed == '10 or less':
            days_listed = 10
        elif days_listed == '20 or less':
            days_listed = 20
        elif days_listed == 'Any':
            days_listed = 0

        for query in queryset:
            num_days = (datetime.now(timezone.utc) - query.list_date).days

            if days_listed != 0:
                if num_days > days_listed:
                    slug = query.slug
                    queryset = queryset.exclude(slug__iexact=slug)
#   has_photos
        has_photos = data["has_photos"]
        if has_photos == "2+":
            has_photos = 2
        elif has_photos == "3+":
            has_photos = 3
        elif has_photos == "4+":
            has_photos = 4
        elif has_photos == "5+":
            has_photos = 5
        elif has_photos == "6+":
            has_photos = 6

        for query in queryset:
            count = 0
            if query.photo_1:
                count += 1
            if query.photo_2:
                count += 1
            if query.photo_3:
                count += 1
            if query.photo_4:
                count += 1
            if query.photo_5:
                count += 1
            if query.photo_6:
                count += 1

            if count < has_photos:
                slug = query.slug
                queryset = queryset.exclude(slug__iexact=slug)
#   open house
        open_house = data["open_house"]
        queryset = queryset.filter(open_house__iexact=open_house)
#   keywords
        keywords = data["keywords"]
        queryset = queryset.filter(description__icontains=keywords)

        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
