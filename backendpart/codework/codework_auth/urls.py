from django.contrib import admin
from django.urls import path,include

from .views import RegisterAPI
from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [

    # register............
    path('register/', RegisterAPI.as_view(), name='register'),

    # Login ..........
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    #TOTP 2 Factor Urls.........
    path('totp/create/', views.TOTPCreateView.as_view(), name='totp-create'),
    path('totp/login/', views.TOTPVerifyView.as_view(), name='totp-login'),


]
