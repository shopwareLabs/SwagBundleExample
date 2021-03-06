import { Component } from 'src/core/shopware';

Component.extend('swag-bundle-create', 'swag-bundle-detail', {
    methods: {
        getBundle() {
            this.bundle = this.repository.create(this.context);
        },

        onClickSave() {
            this.isLoading = true;

            this.repository
                .save(this.bundle, this.context)
                .then(() => {
                    this.isLoading = false;
                    this.$router.push({ name: 'swag.bundle.detail', params: { id: this.bundle.id } });
                }).catch((exception) => {
                    this.isLoading = false;

                    this.createNotificationError({
                        title: 'The bundle could not be saved.',
                        message: exception
                    });
                });
        }
    }
});
