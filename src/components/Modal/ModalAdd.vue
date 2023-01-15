<template>
    <Heading size="medium" position="center" :class="spaceSprinkles({ marginBottom: 'medium' })">Add new account</Heading>
    <Form>
        <template #inputs>
            <Input :status="$v.siteName.$error ? 'error' : 'neutral'" placeholder="Site name" v-model="siteName">
            <template #message v-if="$v.siteName.$error">
                Site name required
            </template>
            </Input>
            <Input :status="$v.login.$error ? 'error' : 'neutral'" placeholder="Login" v-model="login">
            <template #message v-if="$v.login.$error">
                Login required
            </template>
            </Input>
            <Input :status="$v.password.$error ? 'error' : 'neutral'" placeholder="Password" type="password" v-model="password">
            <template #message v-if="$v.password.$error">
                Password required
            </template>
            </Input>
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
import { onMounted, ref, watch } from 'vue';
import { flexSprinkles } from '../../styles/flex.css';
import { spaceSprinkles } from '../../styles/space.css';
import Heading from '../Heading/Heading.vue';
import Form from '../Form/Form.vue';
import Input from '../Input/Input.vue';
import Button from '../Button/Button.vue';
import passwordManager from '../../services/password-manager';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useMainStore } from '../../store/main';
const props = defineProps({
    successCallback: {
        type: Function,
        default: () => { }
    }
})

const { setGlobalLoading } = useMainStore()

const siteName = ref('')
const login = ref('')
const password = ref('')


const rules = {
    siteName: { required },
    login: { required },
    password: { required },
}

const $v = useVuelidate(rules, { siteName, login, password })

const enter = async () => {
    setGlobalLoading(true)
    await $v.value.$validate()
    if ($v.value.$error) return
    await passwordManager.add({ siteName: siteName.value, login: login.value, password: password.value })
    setGlobalLoading(false)
    props.successCallback({ siteName, login, password })
}
</script>

