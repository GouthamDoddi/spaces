require 'net/smtp'
class SendEmail
  def self.send(template, opts)
    resp = Net::SMTP.start('172.30.31.228', 25) do |smtp|
      smtp.send_message template(opts), 'support@jawda.gov.qa', 'sathish@pasupunuri.com'
    end
    console.log(resp)
    resp
  end

  def self.template(name, options)
    {
      forgot_password: " Hi #{options[:o].name}, Please click on link to reset password: #{o.reset_password_link}"
    }
  end
end