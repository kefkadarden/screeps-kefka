-- Example Neovim local project settings
-- Place this logic in your main config instead if you prefer.

-- LSP setup snippet (assuming you have plugins installed)
-- require('lspconfig').ts_ls.setup{}
-- require('lspconfig').eslint.setup{}

-- Format on save using conform (if installed)
-- vim.api.nvim_create_autocmd('BufWritePre', {
--   pattern = '*.ts',
--   callback = function() require('conform').format({ async = false }) end
-- })
