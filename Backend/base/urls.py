from django.urls import path
from . import views

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
# )

urlpatterns = [
    # JWT Auth routes
    path(
        "users/login/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"
    ),
    # Normal Routes
    # path("", views.getRoute, name="route"),
    # Users routes
    path("users/register/", views.registerUser, name="register_user"),
    path("users/", views.getUsers, name="users"),
    path("users/profile/", views.getUserProfile, name="user_profile"),
    # Product routes
    path("products/", views.getProducts, name="products"),
    path("products/<str:pk>/", views.getProduct, name="product"),
]
