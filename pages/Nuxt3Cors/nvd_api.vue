<template>
    <div>
        <v-card
        class="mx-auto"
        >
            <v-card-text>
                <p class="text-h6 font-weight-black">Request NVD API Key</p>
        
                <div class="text-medium-emphasis">
                    All requests to the APIs use the HTTP GET method and each API has a unique base URL. 
                    Parameters may be added to the URL query to filter requests for specific information. 
                    The parameters function similar to those found on the NVD’s advanced CVE search page and the CVE/CPE details pages. 
                    All parameter names and values are case insensitive.
                    API keys are passed in the request header. 
                    The exact method of passing header information with a GET request varies based on the user agent. 
                    Including apiKey:{key value}, (without brackets or spaces) allows users to make a greater number of requests in a given time than they could otherwise. Please note, the {key value} is case sensitive.
                </div>
            </v-card-text>
    
            <v-card-actions>
                <v-btn
                    color="teal-accent-4"
                    text="Request"
                    variant="text"
                    href="https://nvd.nist.gov/developers/request-an-api-key"
                ></v-btn>
            </v-card-actions>
        </v-card>
        <v-card
            class="mx-auto"
        >
            <v-card-text>
                <p class="text-h6 font-weight-black">Register NVD API Key</p>        
                <v-text-field
                    v-model="key"
                    hide-details="auto"
                    label="API Key"
                    clearable
                ></v-text-field>
            </v-card-text>
        </v-card>
        <v-card
            class="mx-auto"
        >
            <v-card-text>
                <p class="text-h6 font-weight-black">Get CPE</p>        
                <v-text-field
                    v-model="cpeMatchString"
                    hide-details="auto"
                    label="cpeMatchString"
                    clearable
                ></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    color="teal-accent-4"
                    :loading="processingGetCpe"
                    @click="getCpe"
                >GET</v-btn>
                <v-btn
                    color="teal-accent-4"
                    :loading="processingGetCpeServer"
                    @click="getCpeFromServer"
                >GET(Server)</v-btn>
            </v-card-actions>
            <v-card-text>
                <v-textarea
                    v-model="products"
                    hide-details="auto"
                    label="Products:"
                    clearable
                    bg-color="amber-lighten-4"
                ></v-textarea>
            </v-card-text>
        </v-card>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useCpeMatching } from '@/composables/useCpeMatching'
    const processingGetCpe = ref(false)
    const processingGetCpeServer = ref(false)
    const key = ref('')
    const cpeMatchString = ref('https://services.nvd.nist.gov/rest/json/cpes/2.0?cpeMatchString=cpe:2.3:o:microsoft:windows_10')
    const products = ref('')

    const getCpe = async () => {
        processingGetCpe.value = true
        const data = await useCpeMatching(cpeMatchString.value, key.value)
        if (data) {
            products.value = JSON.stringify(data)
        }
        processingGetCpe.value = false
    }

    const getCpeFromServer = async () => {
        processingGetCpeServer.value = true
        const { data } = await useFetch('/api/cpe')
        if (data) {
            products.value = JSON.stringify(data)
        }
        processingGetCpeServer.value = false
    }

</script>