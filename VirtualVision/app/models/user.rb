class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :authentications, :dependent => :delete_all 
  has_many :messages 
  before_save :ensure_authentication_token
 
  devise :database_authenticatable, :registerable, :token_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable#,:confirmable

  def skip_confirmation!
    self.confirmed_at = Time.now
  end

  def apply_omniauth(omniauth)
    self.email = omniauth.uid + "@twitter.com"
    self.name = omniauth['info']['name']
    self.lastname = omniauth['info']['name']
    self.username = omniauth['info']['nickname']
    self.password = "12345678912"
    
    authentications.build(:provider => omniauth['provider'], :uid => omniauth['uid'])
  end
  def password_required?
    (authentications.empty? || !password.blank?) && super 
  end
  def update_with_password(params, *options)
    if encrypted_password.blank?
                update_attributes(params, *options)
    else
       super
     end
  end

end
