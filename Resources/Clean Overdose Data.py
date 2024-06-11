#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Import dependencies
import pandas as pd
import numpy as py
import matplotlib.pyplot as plt
import os
import csv 


# In[2]:


# Read the data into a Pandas DataFrame
CDC_df = pd.read_csv('Resources/VSRR_Provisional_Drug_Overdose_Death_Counts.csv')
CDC_df.head()


# In[3]:


CDC_df = CDC_df.loc[CDC_df["Indicator"] == "Number of Drug Overdose Deaths"]
CDC_df


# In[4]:


CDC_df = CDC_df.loc[:, ["Month", "Year", "Indicator", "Data Value"]]
CDC_df


# In[5]:


CDC_df = CDC_df.loc[CDC_df["Year"] <= 2019]
CDC_df


# In[6]:


CDC_df = CDC_df.replace(',','', regex=True)


# In[7]:


CDC_df["Data Value"] = CDC_df["Data Value"].astype(str).astype(int)


# In[8]:


CDC_df_2015 = CDC_df.loc[CDC_df["Year"] == 2015]
CDC_df_2015


# In[9]:


CDC_df_2015 = pd.DataFrame(CDC_df_2015.groupby(["Year","Month"])["Data Value"].sum())
CDC_df_2015


# In[10]:


CDC_df_2015_percent = (CDC_df_2015['Data Value'] / CDC_df_2015['Data Value'].sum()) * 100
CDC_df_2015_percent


# In[11]:


pie_chart = CDC_df_2015["Data Value"].value_counts()


plt.pie(pie_chart, labels=pie_chart.index, autopct='%1.1f%%')
plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
plt.show()


# In[12]:


CDC_df_2016 = CDC_df.loc[CDC_df["Year"] == 2016]
CDC_df_2016


# In[13]:


CDC_df_2016 = pd.DataFrame(CDC_df_2016.groupby(["Year","Month"])["Data Value"].sum())
CDC_df_2016


# In[14]:


CDC_df_2016_percent = (CDC_df_2016['Data Value'] / CDC_df_2016['Data Value'].sum()) * 100
CDC_df_2016_percent


# In[15]:


pie_chart = CDC_df_2016["Data Value"].value_counts()


plt.pie(pie_chart, labels=pie_chart.index, autopct='%1.1f%%')
plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
plt.show()


# In[16]:


CDC_df_2017 = CDC_df.loc[CDC_df["Year"] == 2017]
CDC_df_2017


# In[17]:


CDC_df_2017 = pd.DataFrame(CDC_df_2017.groupby(["Year","Month"])["Data Value"].sum())
CDC_df_2017


# In[18]:


CDC_df_2017_percent = (CDC_df_2017['Data Value'] / CDC_df_2017['Data Value'].sum()) * 100
CDC_df_2017_percent


# In[19]:


pie_chart = CDC_df_2017["Data Value"].value_counts()


plt.pie(pie_chart, labels=pie_chart.index, autopct='%1.1f%%')
plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
plt.show()


# In[20]:


CDC_df_2018 = CDC_df.loc[CDC_df["Year"] == 2018]
CDC_df_2018


# In[21]:


CDC_df_2018 = pd.DataFrame(CDC_df_2018.groupby(["Year","Month"])["Data Value"].sum())
CDC_df_2018


# In[22]:


CDC_df_2018_percent = (CDC_df_2018['Data Value'] / CDC_df_2018['Data Value'].sum()) * 100
CDC_df_2018_percent


# In[23]:


pie_chart = CDC_df_2018["Data Value"].value_counts()


plt.pie(pie_chart, labels=pie_chart.index, autopct='%1.1f%%')
plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
plt.show()


# In[24]:


CDC_df_2019 = CDC_df.loc[CDC_df["Year"] == 2019]
CDC_df_2019


# In[25]:


CDC_df_2019 = pd.DataFrame(CDC_df_2019.groupby(["Year","Month"])["Data Value"].sum())
CDC_df_2019


# In[26]:


CDC_df_2019_percent = (CDC_df_2019['Data Value'] / CDC_df_2019['Data Value'].sum()) * 100
CDC_df_2019_percent


# In[27]:


pie_chart = CDC_df_2019["Data Value"].value_counts()


plt.pie(pie_chart, labels=pie_chart.index, autopct='%1.1f%%')
plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
plt.show()

