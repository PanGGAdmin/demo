package com.demo.controller;

import com.demo.pojo.Test;
import com.demo.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2018/5/2.
 */
@RestController
@RequestMapping("/dm")
public class demo_ctl {
    @Autowired
    private TestService service;
    @RequestMapping("/sel")
    public Object select(){
        Map<String,Object> map=new HashMap<String,Object>();
        List<Test> users=service.select();
        map.put("users",users);
        map.put("success",true);
        return map;
    }
    @RequestMapping("/add")
    public Object add(Test test){
        Map<String,Object> map=new HashMap<String,Object>();
        int i=service.addUser(test);
        if(i!=0){
            map.put("success",true);
            map.put("msg","新增成功");
        }else{
            map.put("success",false);
            map.put("msg","失败");
        }
        return  map;
    }
    @RequestMapping("/del")
    public Object del(Integer id){
        Map<String,Object> map=new HashMap<String,Object>();
        int i=service.delete(id);
        if(i!=0){
            map.put("success",true);
            map.put("msg","删除成功");
        }else{
            map.put("success",false);
            map.put("msg","删除失败");
        }
        return  map;
    }
    @RequestMapping("/update")
    public Object update(@RequestBody() Test test){
        Map<String,Object> map=new HashMap<String,Object>();
        int i=service.updateTest(test);
        if(i!=0){
            map.put("success",true);
            map.put("msg","修改成功");
        }else{
            map.put("success",false);
            map.put("msg","失败");
        }
        return  map;
    }
}
