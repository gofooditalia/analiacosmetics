import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Skeleton className="h-8 w-48 mb-4" />
        <Skeleton className="h-4 w-96" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64">
          <Skeleton className="h-6 w-24 mb-4" />
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-32" />
            ))}
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-6 w-20" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
