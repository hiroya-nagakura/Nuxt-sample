class Api::V1::ArticlesController < ApplicationController
  before_action :set_article, only: %i[show update destroy]

  def index
    @articles = Article.all
    render json: {articles: @articles}
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article
    else
      render json: @article.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    render json: {article: @article}
  end

  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors
    end
  end

  def destroy
    @article.destroy
  end

  private
  def article_params
    params.require(:article).permit(:title, :target_site, :content)
  end

  def set_article
    @article = Article.find(params[:id])
  end

end


