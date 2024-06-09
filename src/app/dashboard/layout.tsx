import React from "react";

export default function DashboardLayout({
  children,
  notification,
  review,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  review: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {notification}
      {review}
    </div>
  );
}
