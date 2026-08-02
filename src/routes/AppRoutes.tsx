import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Learn from "../pages/Learn";
import Practice from "../pages/Practice";
import Analytics from "../pages/Analytics";
import MockInterview from "../pages/MockInterview";
import NotFound from "../pages/NotFound";
import UIShowcase from "../pages/UIShowcase";
import TestApi from "../pages/TestApi";
import Login from "../pages/Login";

import ProtectedRoute from "../auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Dashboard */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Learn */}
      <Route
        path="/learn"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Learn />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Practice */}
      <Route
        path="/practice"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Practice />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Mock Interview */}
      <Route
        path="/mock-interview"
        element={
          <ProtectedRoute>
            <MainLayout>
              <MockInterview />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Analytics */}
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Analytics />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* UI Showcase */}
      <Route
        path="/ui-showcase"
        element={
          <ProtectedRoute>
            <MainLayout>
              <UIShowcase />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Test API */}
      <Route
        path="/test-api"
        element={
          <ProtectedRoute>
            <MainLayout>
              <TestApi />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;