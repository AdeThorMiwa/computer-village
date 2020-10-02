import React from 'react'
import { DivSkeleton, SpanSkeleton } from './style'

const ParagraphSkeleton = () => {
    return (
        <div>
            <DivSkeleton />
            <SpanSkeleton style={{width: '40%'}} />
        </div>
    )
}

export { ParagraphSkeleton }
