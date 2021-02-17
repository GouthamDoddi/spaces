require 'net/smtp'
class SendEmail
  def self.send(name, opts)
    resp = Net::SMTP.start('172.30.31.228', 25) do |smtp|
      smtp.send_message template[:forgot_password].(opts), 'support@jawda.gov.qa', opts[:o].email
    end
    puts(resp)
    resp
  end

  def self.template
    {
      forgot_password: Proc.new{ | options | "Hi #{options[:o].name}, Please click on link to reset password: #{options[:o].reset_password_link}"}
    }
  end
end