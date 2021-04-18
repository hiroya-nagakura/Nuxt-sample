class Article < ApplicationRecord

  validates: :title, :target_site, :content, presence: true
end
