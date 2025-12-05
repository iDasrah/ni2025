import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/snake')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/snake"!</div>
}
