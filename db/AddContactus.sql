SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 12/July/2017
-- Description:	To Add contact-us entry
-- =============================================
CREATE PROCEDURE AddContactus 
	-- Add the parameters for the stored procedure here
	@Name nvarchar(20), 
	@Email nvarchar(30),
	@Subject nvarchar(20),
	@Message nvarchar(100)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT @Name, @Email

END
GO
