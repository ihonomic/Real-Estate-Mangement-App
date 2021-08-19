from rest_framework import generics
from rest_framework import permissions
from .models import Realtor
from .serializers import RealtorSerializer


class RealtorListView(generics.ListCreateAPIView):
    """ GET & POST """
    permission_classes = (permissions.AllowAny, )
    serializer_class = RealtorSerializer
    queryset = Realtor.objects.all()
    pagination_class = None


class RealtorView(generics.RetrieveAPIView):
    """ DETAIL """
    serializer_class = RealtorSerializer
    queryset = Realtor.objects.all()
    lookup_field = 'slug'


class TopSellerView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = RealtorSerializer
    queryset = Realtor.objects.filter(top_seller=True)
    pagination_class = None
