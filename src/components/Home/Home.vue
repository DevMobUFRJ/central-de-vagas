<!--
		Home é a página que todos os usuários não logados podem acessar, nela pode haver outros "components" além do login,
		mas por enquanto só pensei nissos.
-->
<template>
	<div>
		<b-container class="home-main-row">
			<b-row>
				<b-col>
					<h1>Central de Vagas</h1>
				</b-col>
				<b-col>
					<div>
						<b-tabs content-class="mt-3">
							<b-tab title="Cadastro" active>
								<div>
									<b-form @submit="onRegister">

										<b-form-group id="input-group-1" label="E-mail:" label-for="input-1">
											<b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Digite o e-mail" ></b-form-input>
										</b-form-group>

										<b-form-group id="input-group-2" label="Digite seu nome:" label-for="input-2">
											<b-form-input id="input-2" v-model="form.name" required placeholder="Digite o nome do usuário"></b-form-input>
										</b-form-group>

										<b-form-group id="input-group-3" label="Digite sua senha" label-for="input-3">
											<b-form-input id="input-3" v-model="form.password" type="password" :state="passStat" required placeholder="Digite a sua senha"></b-form-input>
										</b-form-group>

										<b-form-group id="input-group-4" label="Confirme sua senha" label-for="input-4">
											<b-form-input id="input-4" type="password" v-model="form.confPassword" :state="passStat" placeholder="Confirme a sua senha"></b-form-input>
										</b-form-group>

										<b-form-group id="input-group-5">
											<b-form-checkbox-group v-model="form.checked" id="checkboxes-5">
												<b-form-checkbox value="me">Concordo com os termos de uso.</b-form-checkbox>
											</b-form-checkbox-group>
										</b-form-group>

										<b-button type="submit" variant="primary">Enviar</b-button>
									</b-form>
								</div>
							</b-tab>
							<b-tab title="Login">
								<b-form @submit="onLogin">

									<b-form-group id="input-group-user-lg" label="Usuário:" label-for="input-username-lg">
										<b-form-input id="input-username-lg" v-model="form.email" required placeholder="Digite o nome do usuário ou e-mail" ></b-form-input>
									</b-form-group>

									<b-form-group id="input-group-pass-lg" label="Digite seu nome:" label-for="in-password-lg">
										<b-form-input id="in-password-lg" v-model="form.password" required placeholder="Digite sua senha"></b-form-input>
									</b-form-group>

									<b-form-group id="input-group-link">
											<b-button variant="link">Esqueci minha senha.</b-button>
									</b-form-group>

									<b-button type="submit" variant="primary">Entrar</b-button>
								</b-form>
							</b-tab>
						</b-tabs>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
		export default {
				name: 'home',
				data() {
					return {
						form: {
							email: '',
							name: '',
							password: '',
							confPassword: '',
							checked: false
						},
						passStat: null,
						show: true
					}
				},
				methods: {
					onRegister(evt) {
						evt.preventDefault()
						if (this.form.password == this.form.confPassword) {
							alert('foi')
							this.passStat = true;
						} else {
							alert('não foi')
							this.passStat = false;
						}
					},
					onLogin(evt) {
						evt.preventDefault()
					}
				}
		}
</script>
