import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/snack')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/snack"!</div>
}
