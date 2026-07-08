// import React from "react";
import { Button, Card, Badge, Spinner, Divider } from "@/components/ui";
import { Plus, ArrowRight, CheckCircle2, AlertTriangle, ExternalLink, ShieldAlert } from "lucide-react";

export default function ComponentPlayground() {
  return (
    <div className="container mx-auto p-8 max-w-5xl space-y-10">
      <div>
        <h1 className="text-grc-xl font-bold text-neutral-text-main">GRC-Shield Component Catalog</h1>
        <p className="text-grc-sm text-neutral-text-muted mt-1">Design token verification playground.</p>
      </div>

      {/* Buttons Showcase */}
      <Card title="Interactive Elements (Buttons)">
        <div className="space-y-6">
          {/* Core Variants */}
          <div className="space-y-2">
            <h4 className="text-grc-xs font-semibold text-neutral-text-muted uppercase tracking-wider">Style Variants</h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost Plain</Button>
              <Button variant="success" leftIcon={<CheckCircle2 className="h-4 w-4" />}>Compliant</Button>
              <Button variant="warning" leftIcon={<AlertTriangle className="h-4 w-4" />}>Review</Button>
              <Button variant="danger" leftIcon={<ShieldAlert className="h-4 w-4" />}>Critical Risk</Button>
              <Button variant="link" rightIcon={<ExternalLink className="h-3 w-3" />}>Documentation</Button>
            </div>
          </div>

          {/* Sizing & Densities */}
          <div className="space-y-2">
            <h4 className="text-grc-xs font-semibold text-neutral-text-muted uppercase tracking-wider">Density Scaling</h4>
            <div className="flex flex-wrap gap-2 items-center">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Default Medium</Button>
              <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>Large Step</Button>
              <Button size="xl">Extra Large</Button>
              <Button size="icon" variant="outline" leftIcon={<Plus className="h-4 w-4" />} aria-label="Quick Add" />
            </div>
          </div>

          {/* Operational States */}
          <div className="space-y-2">
            <h4 className="text-grc-xs font-semibold text-neutral-text-muted uppercase tracking-wider">Component States</h4>
            <div className="flex flex-wrap gap-2">
              <Button loading variant="primary">Processing Record</Button>
              <Button disabled variant="outline">Disabled State</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Badges & Status Tokens */}
      <Card title="Status Display Indicators (Badges)">
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary">System Status</Badge>
          <Badge variant="success">ISO27001 Compliant</Badge>
          <Badge variant="warning">Audit Pending</Badge>
          <Badge variant="danger">High Exposure</Badge>
          <Badge variant="info">SOC2 In-Scope</Badge>
          <Badge variant="gray">Archived Log</Badge>
        </div>
      </Card>

      {/* Dividers & Layout Separation */}
      <Card title="Dividers & Loaders">
        <div className="space-y-4">
          <p className="text-grc-sm text-neutral-text-muted">Section Break Layout Example below:</p>
          <Divider label="AUDIT PARAMETERS" />
          <div className="flex items-center justify-center gap-6 py-4">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </div>
      </Card>
    </div>
  );
}