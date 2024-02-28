import React from 'react'
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../../../../components/ui/dialog'
import { Label } from '../../../../../components/ui/label'
import { Input } from '../../../../../components/ui/input'
import { Button } from '../../../../../components/ui/button'

const ImportSpace = () => {
  return (
    <DialogContent className="sm:max-w-[425px] kilo">
        <DialogHeader>
          <DialogTitle>Import Space</DialogTitle>
          <DialogDescription>
            Explore different spaces on Syncspace
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tag" className="text-right">
              Space Id
            </Label>
            <Input id="tag" placeholder='Enter spaceId' className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className='bg-[#4942E4] hover:bg-[#1A1679]'>Import</Button>
        </DialogFooter>
      </DialogContent>
  )
}

export default ImportSpace