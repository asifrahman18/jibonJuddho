from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from datetime import timedelta
from .models import Company, Job, JobType, Qualification

class APITestCases(APITestCase):

    def setUp(self):

        self.user = User.objects.create_user(
            username='testuser',
            password='testpassword'
        )


        self.company = Company.objects.create(
            name='Test Company',
            description='Test Description',
            email='test@example.com',
            location='Test Location',
            user=self.user
        )


        self.job = Job.objects.create(
            title='Test Job',
            status='active',
            description='Test Job Description',
            email='job@example.com',
            phone='1234567890',
            location='Job Location',
            jobType=JobType.training,
            qualification=Qualification.any,
            salary=50000,
            openings=3,
            company=self.company,
            #expiresAt=timedelta(days=30)
        )


    def test_list_all_jobs(self):
        url = reverse('job')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_job_detail_view(self):
        url = reverse('job', args=[self.job.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_company_job_view(self):
        url = reverse('company_job', args=[self.company.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_update_job(self):
        url = reverse('updateJob', args=[self.job.id])
        data = {'title': 'Updated Job Title'}
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_delete_job(self):
        url = reverse('delete_job', args=[self.job.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


    def test_topic_stat_view(self):
        url = reverse('topic_stat', args=['Test'])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)



    def test_user_registration(self):
        url = reverse('register')
        data = {'first_name': 'John', 'last_name': 'Doe', 'email': 'newuser@example.com', 'password': 'newpassword'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


    def test_current_user_view(self):
        url = reverse('current_user')
        self.client.force_authenticate(user=self.user)
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_token_obtain_pair_view(self):
        url = reverse('token_obtain_pair')
        data = {'username': 'testuser', 'password': 'testpassword'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)


    def test_company_creation(self):
        url = reverse('register_company', args=[self.user.id])
        data = {'name': 'New Company', 'description': 'New Description', 'email': 'new@example.com', 'location': 'New Location'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


    def test_list_all_companies(self):
        url = reverse('all_companies')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_user_companies_view(self):
        url = reverse('user_companies', args=[self.user.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_company_detail_view(self):
        url = reverse('view_company', args=[self.company.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_job_creation(self):
        url = reverse('add_job', args=[self.company.id])
        data = {'title': 'New Job', 'status': 'active', 'description': 'New Job Description', 'email': 'newjob@example.com', 'phone': '9876543210', 'location': 'New Job Location', 'jobType': 'fulltime', 'qualification': 'undergraduate', 'salary': 60000, 'openings': 2}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
