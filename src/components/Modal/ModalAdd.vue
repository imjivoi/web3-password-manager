<template>
    <Heading size="medium" position="center" :class="spaceSprinkles({ marginBottom: 'medium' })">Add new password</Heading>
    <Form>
        <template #inputs>
            <Input placeholder="Site name" v-model="site" />
            <Input placeholder="Login" v-model="login" />
            <Input placeholder="Password" type="password" v-model="password" />
        </template>
        <template #footer>
            <div :class="
                flexSprinkles({
                    display: {
                        tablet: 'flex',
                        mobile: 'block',
                    },
                    justifyContent: 'center'
                })
            ">
                <div>
                    <Button size="small" @click="enter">Add</Button>
                </div>
            </div>
        </template>
    </Form>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { flexSprinkles } from '../../styles/flex.css';
import { spaceSprinkles } from '../../styles/space.css';
import Heading from '../Heading/Heading.vue';
import Form from '../Form/Form.vue';
import Input from '../Input/Input.vue';
import Button from '../Button/Button.vue';

const props = defineProps({
    successCallback: {
        type: Function,
        default: () => { }
    }
})

const site = ref('')
const login = ref('')
const password = ref('')

const enter = () => {
    props.successCallback({ site, login, password })
}

</script>

<style>

</style>