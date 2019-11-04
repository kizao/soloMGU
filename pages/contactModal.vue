<template lang="pug">
div
  form.form-horizontal(name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field")
    input(type="hidden" name="form-name" value="contact")
    .form-group
      label.col-sm-3.control-label お名前
      .col-sm-6
        input.form-control(type='text', name='name' required)
    .form-group
      label.col-sm-3.control-label メールアドレス
      .col-sm-6
        input.form-control(type='email', name='email' required)
    .form-group
      label.col-sm-3.control-label お問い合わせ内容
      .col-sm-6
        textarea.form-control(rows='7', name='message' required)
    .form-group
      label.col-sm-3
      .col-sm-9
        button.btn.btn-primary(type="submit" nuxt-link to="/") 送信する
</template>
