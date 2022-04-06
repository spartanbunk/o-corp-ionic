<template>
    <ion-page>

        <ion-header>
            <ion-toolbar>
                <ion-buttons slot='start'>
                    <ion-back-button :default-href='pageDefaultBackBtn'></ion-back-button>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <router-view/>
        <ion-content>
            <slot />
        </ion-content>

    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/vue';
export default {
    props:['pageTitle','pageDefaultBackBtn'],
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonBackButton,
        IonButtons
    }
}
</script>