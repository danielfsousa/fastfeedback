import React from 'react'
import useSWR from 'swr'
import EmptyState from '#components/EmptyState'
import SiteTableSkeleton from '#components/SiteTableSkeleton'
import DashboardShell from '#components/DashboardShell'
import SiteTable from '#components/SiteTable'

export default function Dashboard() {
  const { data } = useSWR('/api/sites')

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }

  data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  return (
    <DashboardShell>{data.length ? <SiteTable sites={data} /> : <EmptyState />}</DashboardShell>
  )
}
