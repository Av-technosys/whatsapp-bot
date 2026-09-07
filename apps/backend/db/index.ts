import { boolean, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  phone: varchar("phone", { length: 20 }).unique(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const tenants = pgTable("tenants", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),          
  companyName: varchar("company_name", { length: 255 }),     
  login: varchar("login", { length: 100 }).notNull(),        
  phone: varchar("phone", { length: 20 }).unique(),                  
  email: varchar("email", { length: 255 }).notNull().unique(),  
  bearerToken: varchar("bearer_token", { length: 512 }).notNull().unique(),       
  createdAt: timestamp("created_at").defaultNow().notNull(), 
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const salesConnect = pgTable("sales_connect", {
  id: uuid("id").defaultRandom().primaryKey(),
  tenantId: uuid("tenant_id").notNull(), 
  jApiUrl: varchar("j_api_url", { length: 500 }).notNull(),   
  jLoginUrl: varchar("j_login_url", { length: 500 }).notNull(),
  clientId: varchar("client_c_id", { length: 255 }).notNull(), 
  clientSecret: varchar("c_secret", { length: 255 }).notNull(), 
  username: varchar("username", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  grantType: varchar("grant_type", { length: 100 }).notNull(),
});

export const whatsappConnect = pgTable("whatsapp_connect", {
  id: uuid("id").defaultRandom().primaryKey(),
  tenantId: uuid("tenant_id").notNull(),
  phoneNumber: varchar("phone_number", { length: 20 }).notNull().unique(),
  businessAccountId: varchar("bussiness_account_id", { length: 255 }).notNull(),
  encryptedToken: varchar("encrypted_token", { length: 512 }).notNull(),
});

export const contacts = pgTable("contacts", {
  id: uuid("id").defaultRandom().primaryKey(),
  tenantId: uuid("tenant_id").notNull(),
  salesforceContactId: varchar("salesforce_contact_id", { length: 255 }).notNull().unique(),
  phoneNumber: varchar("phone_number", { length: 20 }).notNull().unique(),
});

export const conversations = pgTable("conversations", {
  id: uuid("id").defaultRandom().primaryKey(),
  tenantId: uuid("tenant_id").notNull(),
  contactId: uuid("contact_id").notNull(),
  status: varchar("status", { length: 50 }).notNull(),
  assignedUser: varchar("assigned_user", { length: 255 }).notNull(),
});

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  conversationId: uuid("conversation_id").notNull(),
  direction: varchar("direction", { length: 10 }).notNull(),
  content: varchar("content", { length: 1000 }).notNull(),
  whatsappMessageId: varchar("whatsapp_message_id", { length: 255 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(),
});