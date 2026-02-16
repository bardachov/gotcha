'use client';

import { useEffect, useRef } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export function SwaggerUIComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply custom styles to override Swagger UI defaults
    if (containerRef.current) {
      const style = document.createElement('style');
      style.textContent = `
        .swagger-ui {
          font-family: Inter, system-ui, sans-serif !important;
        }
        .swagger-ui .topbar {
          display: none !important;
        }
        .swagger-ui .info {
          margin: 0 !important;
        }
        .swagger-ui .info .title {
          display: none !important;
        }
        .swagger-ui .info .description {
          display: none !important;
        }
        .swagger-ui .scheme-container {
          background: hsl(var(--card)) !important;
          border: 1px solid hsl(var(--border)) !important;
          border-radius: 0.5rem !important;
          padding: 1rem !important;
          margin-bottom: 1.5rem !important;
        }
        .swagger-ui .opblock-tag {
          border-bottom: 1px solid hsl(var(--border)) !important;
        }
        .swagger-ui .opblock {
          background: hsl(var(--card)) !important;
          border: 1px solid hsl(var(--border)) !important;
          border-radius: 0.5rem !important;
          margin-bottom: 1rem !important;
        }
        .swagger-ui .opblock .opblock-summary {
          background: transparent !important;
          border-bottom: 1px solid hsl(var(--border)) !important;
        }
        .swagger-ui .opblock.is-open .opblock-summary {
          border-bottom: 1px solid hsl(var(--border)) !important;
        }
        .swagger-ui .opblock .opblock-section-header {
          background: hsl(var(--muted)) !important;
        }
        .swagger-ui .btn {
          font-family: Inter, system-ui, sans-serif !important;
          border-radius: 0.375rem !important;
        }
        .swagger-ui .btn.execute {
          background-color: hsl(var(--primary)) !important;
          color: hsl(var(--primary-foreground)) !important;
          border-color: hsl(var(--primary)) !important;
        }
        .swagger-ui .btn.execute:hover {
          opacity: 0.9 !important;
        }
        .swagger-ui .response-col_status {
          font-family: 'Geist Mono', monospace !important;
        }
        .swagger-ui .response-col_description {
          font-family: Inter, system-ui, sans-serif !important;
        }
        .swagger-ui select,
        .swagger-ui input[type=text],
        .swagger-ui input[type=password],
        .swagger-ui textarea {
          background: hsl(var(--background)) !important;
          border: 1px solid hsl(var(--border)) !important;
          color: hsl(var(--foreground)) !important;
          border-radius: 0.375rem !important;
        }
        .swagger-ui .model-box {
          background: hsl(var(--muted)) !important;
          border-radius: 0.375rem !important;
        }
        .swagger-ui section.models {
          background: transparent !important;
          border: 1px solid hsl(var(--border)) !important;
          border-radius: 0.5rem !important;
        }
        .swagger-ui .model-container {
          background: hsl(var(--card)) !important;
        }
        .swagger-ui .model {
          font-family: 'Geist Mono', monospace !important;
        }
        .swagger-ui table thead tr th {
          font-family: Inter, system-ui, sans-serif !important;
          color: hsl(var(--foreground)) !important;
          border-bottom: 1px solid hsl(var(--border)) !important;
        }
        .swagger-ui table tbody tr td {
          color: hsl(var(--foreground)) !important;
          border-bottom: 1px solid hsl(var(--border)) !important;
        }
        .swagger-ui .opblock-tag-section {
          margin-bottom: 2rem !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="swagger-container">
      <SwaggerUI
        url="/api/swagger"
        deepLinking={true}
        displayRequestDuration={true}
        filter={true}
        persistAuthorization={true}
        tryItOutEnabled={true}
        docExpansion="list"
        defaultModelsExpandDepth={1}
        defaultModelExpandDepth={3}
      />
    </div>
  );
}
