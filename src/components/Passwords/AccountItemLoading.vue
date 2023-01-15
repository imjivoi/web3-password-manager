<template>
    <Card>
        <div :class="flexSprinkles({ display: 'flex', flexDirection: 'column' })">
            <div :class="flexSprinkles({ display: 'flex', justifyContent: 'space-between' })">
                <Skeleton width="40%" height="16px" />
            </div>
            <div :class="[flexSprinkles({ display: 'flex', flexDirection: 'column' }), spaceSprinkles({ marginTop: 'xsmall', gap: '2xsmall' })]">
                <div :class="flexSprinkles({ display: 'flex', justifyContent: 'space-between' })">
                    <Skeleton width="100%" height="16px" />
                </div>
                <div :class="flexSprinkles({ display: 'flex', justifyContent: 'space-between' })">
                    <Skeleton width="100%" height="16px" />
                </div>
            </div>
        </div>
    </Card>

</template>

<script lang="ts" setup>
import { Button, Card, Input, Skeleton } from '@/components'

import { flexSprinkles } from '../../styles/flex.css'

import { spaceSprinkles } from '../../styles/space.css'
import { passwordItem, header, itemData } from './Passwords.css'

</script>
