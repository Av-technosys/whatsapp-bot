"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { MessageCircleIcon, PencilIcon, PlugIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getTenant, type Tenant } from "@/lib/api";

export default function TenantDetailPage() {
  const { tenantId } = useParams<{ tenantId: string }>();
  const router = useRouter();
  const [tenant, setTenant] = useState<Tenant | null>(null);

  useEffect(() => {
    getTenant(tenantId).then((res) => setTenant(res.data));
  }, [tenantId]);

  if (!tenant) return <p className="text-sm text-muted-foreground">Loading...</p>;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{tenant.name}</h1>
          <p className="text-sm text-muted-foreground">{tenant.email}</p>
        </div>
        <Button variant="outline" onClick={() => router.push(`/tenant/${tenantId}/edit`)}>
          <PencilIcon /> Edit
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card
          className="cursor-pointer"
          onClick={() => router.push(`/tenant/${tenantId}/salesforce-connect`)}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlugIcon className="size-4" /> Salesforce Connect
            </CardTitle>
            <CardDescription>Visit to set up Salesforce for this tenant</CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer"
          onClick={() => router.push(`/tenant/${tenantId}/whatsapp`)}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircleIcon className="size-4" /> WhatsApp Connect
            </CardTitle>
            <CardDescription>Visit to set up WhatsApp for this tenant</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}