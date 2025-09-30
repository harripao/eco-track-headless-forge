import React from 'react'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

export default function UITest() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">UI Test Page</h1>
      <Button
        onClick={() => toast({ title: 'Test Toast', description: 'This is working!' })}
      >
        Show Toast
      </Button>
    </div>
  )
}