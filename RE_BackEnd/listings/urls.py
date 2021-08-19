from django.urls import path

from . import views


urlpatterns = [
    path('', views.ListingsView.as_view()),
    path('<slug:slug>', views.ListingView.as_view()),
    path('search/', views.SearchView.as_view()),

]
