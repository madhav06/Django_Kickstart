from django.contrib import admin
from django.urls import path, include
from pizza.views import PizzaViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'pizza', PizzaViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
